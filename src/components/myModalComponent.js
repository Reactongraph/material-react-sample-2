
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
    },
});

class myModalComponent extends React.Component {
    render() {
        const { classes, open, onClose } = this.props;

        return (
            <div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={onClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        {this.props.children}
                    </div>
                </Modal>
            </div >
        );
    }
}

myModalComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(myModalComponent);