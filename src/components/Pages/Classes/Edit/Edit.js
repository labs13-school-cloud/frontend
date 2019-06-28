import React, { useEffect } from "react";
import { connect } from "react-redux";
import { editClass, 
        getClassById } from "store/actions";
import { withStyles } from "@material-ui/core/styles";
import {
    Paper,
    TextField,
    Button,
    FormControl
} from "@material-ui/core/";

import { styles, PageContainer } from "./styles.js";

function Edit(props) {
    useEffect(() => {
        props.getClassById(props.match.params.id);
    }, [getClassById]);
    const { classes } = props;

    const updateClass = e => {
        e.preventDefault();
        props.editClass(props.singleClass.id, {
            class_name,
            subject,
            number_of_Students,
            teacher_name,
            grade_level,
            user_id: props.user_id
        });
        props.history.push("/home");
    };

    console.log(props.singleClass);

    return (
        <PageContainer style={{ position: "relative" }}>
            <Paper className={classes.paper}>
                <FormControl>
                    <TextField 
                        id="standard-name"
                        label="Class Name"
                        className={classes.textField}
                        value={props.singleClass.class_name}
                        margin="normal"
                    />
                    <TextField 
                        id="standard-name"
                        label="Subject"
                        className={classes.textField}
                        value={props.singleClass.subject}
                        margin="normal"
                    />
                    <TextField 
                        id="standard-name"
                        label="Number Of Students"
                        className={classes.textField}
                        value={props.singleClass.number_of_students}
                        margin="normal"
                    />
                    <TextField 
                        id="standard-name"
                        label="Teacher's Name"
                        className={classes.textField}
                        value={props.singleClass.teacher_name}
                        margin="normal"
                    />
                    <TextField 
                        id="standard-name"
                        label="Grade Level"
                        className={classes.textField}
                        value={props.singleClass.grade_level}
                        margin="normal"
                    />
                </FormControl>
                <Button onClick={e => updateClass}>Submit</Button>
            </Paper>
        </PageContainer>
    )
}

const mapStateToProps = state => ({
    singleClass: state.classList.singleClass
});

export default connect(
    mapStateToProps,
    { getClassById, editClass }
)(withStyles(styles)(Edit))