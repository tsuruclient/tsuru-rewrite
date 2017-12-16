import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

import instances from '../../../redux/data/constants/instanceList';

const styles = () => ({
    root: {
        overflow: 'auto',
    },
});

const errorType = {
    INSTANCENAME: 'INSTANCENAME',
    APIKEY: 'APIKEY',
    APISECRET: 'APISECRET',
};

class SelectAccountTypeView extends React.Component {
    state = {
        domainName: '',
        consumerKey: '',
        consumerSecret: '',
        err: null,
    }

    next = () => {
        this.setState({err: null});
        const status = instances[Object.keys(instances)[this.props.selected]];
        console.log(status);
        try{
            if (status.type !== 'Twitter'){
                status.instance = this.state.domainName;
                status.apiurl = 'https://' + status.instance + '/';
                if (status.instance === '') throw errorType.INSTANCENAME;
            }
            status.apikey = this.state.consumerKey;
            status.apisecret = this.state.consumerSecret;
            if (status.apikey === '') throw errorType.APIKEY;
            if (status.apisecret === '') throw errorType.APISECRET;

            this.props.startAuth(status);
            this.props.forwardPinSection();
        }catch(e){
            this.setState({err: e}); 
        }
    }

    render() {
        return (
            <div>
                <DialogTitle>{'追加したいアカウントの情報を入力してください'}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{'consumer-key, consumer-secretはアカウントが登録されているインスタンスから発行されたものを使用する必要があります。インスタンスによっては外部アプリケーション連携が不可能な場合もあります。その場合登録することはできません'}</DialogContentText>
                    <TextField
                        value={this.state.domainName}
                        onChange={event => this.setState({domainName: event.target.value})}
                        id='api-url'
                        label='Domain Name(example: mstdn.jp, friends.nico)'
                        margin='normal'
                        error={this.state.err === errorType.INSTANCENAME}
                        fullWidth />
                    <TextField
                        value={this.state.consumerKey}
                        onChange={event => this.setState({consumerKey: event.target.value})}
                        id='api-key'
                        label='Consumer Key'
                        margin='normal'
                        error={this.state.err === errorType.APIKEY}
                        fullWidth />
                    <TextField
                        value={this.state.consumerSecret}
                        onChange={event => this.setState({consumerSecret: event.target.value})}
                        id='api-key-secret'
                        label='Consumer Secret'
                        margin='normal'
                        error={this.state.err === errorType.APISECRET}
                        fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button raised onClick={this.next}>{'そうですか'}</Button>
                </DialogActions>
            </div>
        )
    }
}

export default withStyles(styles)(SelectAccountTypeView);
