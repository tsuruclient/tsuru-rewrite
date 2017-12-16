import React from 'react';
import {withStyles} from 'material-ui/styles';
import ButtonBase from 'material-ui/ButtonBase';
import Avatar from 'material-ui/Avatar';
import Tooltip from 'material-ui/Tooltip';
import Badge from 'material-ui/Badge';
import Popover from 'material-ui/Popover';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: {
        
    },
    tooltip: {
        fontSize: 16,
        padding: "6px 12px"
    },
    tooltipRight: {
        marginLeft: 12,
    },
    popper: {
        marginLeft: 42
    },
    button: {
        padding: 0,
        margin: 4
    },
    badge: {
        top: -3,
        right: -3,
    }
})

class AccountIcon extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            anchorEl: null,
        };
    }

    tooltipStyles = {
        tooltip: this.props.classes.tooltip,
        tooltipRight: this.props.classes.tooltipRight,
        popper: this.props.classes.popper
    }

    badgeStyles = {
        badge: this.props.classes.badge
    }

    handleClickButton = () => {
        this.setState({
            open: true,
            //anchorEl: findDOMNode(this.button),
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    addBadge = (valid, dom) => (
        valid ? dom : (<Badge badgeContent="!" color="accent" classes={this.badgeStyles}>{dom}</Badge>)
    )

    render() {
        const { data, domain, isValid, classes } = this.props;
        return (
            <Tooltip id="tooltip-account-icon"
                title={"@" + data.screenName + "@" + domain + (isValid ? "" : " Not Connected.")}
                placement="right"
                classes={this.tooltipStyles}>
                <ButtonBase disableRipple classes={{root: classes.button}}>
                    {this.addBadge(isValid, (<Avatar src={data.avatar} />))}
                </ButtonBase>
            </Tooltip>
        )
    }
}

export default withStyles(styles)(AccountIcon);