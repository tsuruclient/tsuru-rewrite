import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';

import Services from '../../../../../redux/data/constants/services';

const styles = theme => ({
    
});



class Textbox extends React.Component {
    textCount() {
        const maxWord = this.props.service === Services.Twitter ? 140 : 500;
        const wordCount = this.props.text.length;
        if(wordCount <= maxWord){
            return wordCount + '文字';
        }else{
            return wordCount + '文字 警告：投稿できない可能性があります';
        }
    }

    render() {
        return (
            <TextField
                id="textContent"
                className={this.props.classes.root}
                margin="none"
                helperText={this.textCount()}
                multiline
                fullWidth
                rowsMax={8}
                value={this.props.text}
                onChange={this.props.update}
            />
        )
    }
}

Textbox.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(Textbox);