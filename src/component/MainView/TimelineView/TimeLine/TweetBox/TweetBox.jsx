import React from 'react';
import {withStyles} from 'material-ui/styles';

import Textbox from './Textbox';
import IconButton from 'material-ui/IconButton';
import SendIcon from 'material-ui-icons/Send';

import * as api from '../../../../../redux/data/entity/Apis.js';

const styles = theme => ({
	root: {
        flexShrink: '0',
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'flex-end',
        marginLeft: '4px',
        marginBottom: '4px',
        minHeight:'49px'
	},
});

class Postbox extends React.Component {
    constructor(props){
        super(props);
        this.post = this.post.bind(this);
    }

    post() {
        const { text } = this.props;
        if(text.trim() === ''){
            //...
        }else{
            const {tlIndex, client, service, postRequest } = this.props;
            postRequest(
                tlIndex,
                client,
                api.post.statuses.update,
                service,
                { status: text },
            );
        }
    }

    shouldComponentUpdate(nextProps){
        if(this.props.text !== nextProps.text) {
            return true;
        }else {
            return false;
        }
    }

    render(){
        const {classes, text, tlIndex, service} = this.props;
        return (
            <div className={classes.root}>
                <Textbox
                    service={service}
                    text={text}
                    update={(event) => {this.props.onChange({ value: event.target.value, tlIndex })}} />
                <IconButton onClick={this.post}>
                    <SendIcon/>
                </IconButton>
            </div>
        )
    }
}

export default withStyles(styles)(Postbox);