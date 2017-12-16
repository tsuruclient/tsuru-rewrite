import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import List, { ListItem,
    ListItemText,
    ListItemSecondaryAction } from 'material-ui/List';
import { DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from 'material-ui/Dialog';
import Radio from 'material-ui/Radio';

import instances from '../../../redux/data/constants/instanceList';

const styles = () => ({
    list: {
        maxHeight: 320,
        overflowY: 'auto',
    }
});

type Props = {
    selected: number,
    select: Function,
    forwardInputDataSection: Function,
    forwardPinSection: Function,
    startAuth: Function,
};

const handleClickForwardButton = (props: Props) => {
    if(props.selected <= 1) { // 1以下はcommon扱い…
        props.forwardInputDataSection();
    }else{
        props.startAuth(instances[Object.keys(instances)[props.selected]]);
        props.forwardPinSection();
    }
}

const SelectAccountTypeView = (props: Props) => (
    <div>
        <DialogContent>
            <DialogContentText>
                {'Twitter, GNU Social, Mastodonのアカウントを最大16個まで追加できます'}
            </DialogContentText>
            <List className={props.classes.list}>
                {Object.keys(instances).map((item, index)=>(
                    <ListItem
                        key={index}
                        button
                        onClick={e => {props.select(index)}}>
                        <ListItemText
                            primary={item}
                            secondary={instances[item].common ? 'ConsumerKeyを発行し用意してください' : 'PIN認証を行います'} />
                        <ListItemSecondaryAction>
                            <Radio
                                checked={index === props.selected}
                                onChange={e => {props.select(index)}}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </DialogContent>
        <DialogActions>
            <Button raised onClick={() => handleClickForwardButton(props)}>
                {'そうですか'}
            </Button>
        </DialogActions>
    </div>
)

export default withStyles(styles)(SelectAccountTypeView);
