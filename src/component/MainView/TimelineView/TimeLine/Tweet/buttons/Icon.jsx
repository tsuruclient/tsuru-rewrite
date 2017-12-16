// @flow
import React from 'react';
import {withStyles} from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';

type Props = {
    classes: Object,
    src: string,
};

const styles = {
    root:{
        float: "left",
        marginLeft: "-48px"
    },
};

const Icon = (props: Props) => {
    return (
        <Avatar className={props.classes.root} src={props.src}/>
    )
}

export default withStyles(styles)(Icon);