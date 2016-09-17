import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '', imagePreviewUrl: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    console.log('handle upload', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img
        id="img-preview"
        src={imagePreviewUrl}
      />);
    }
    else {
      $imagePreview = (<div id="empty-preview"><i className="fa fa-user fa-3x fa-inverse" aria-hidden="true"></i></div>);
    }

    return <div>
        <form
          className="container-cols container-preview"
          onSubmit={(e) => this._handleSubmit(e)}>
            <div className="container-rows">
              <div className="preview">
                {$imagePreview}
              </div>
              <input
                type="file"
                onChange={(e) => this._handleImageChange(e)}
              />
            </div>
            <div>
              <RaisedButton
                type="submit"
                onClick={(e) => this._handleSubmit(e)}
                label="Upload Image"
                primary={true}
              />
            </div>
        </form>
      </div>;
  }
};

export default ImageUpload;
