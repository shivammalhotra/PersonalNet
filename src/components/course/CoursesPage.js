import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            course: {title: ""}
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onCLickSave = this.onCLickSave.bind(this);
        this.courseRow = this.courseRow.bind(this);
    }

    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onCLickSave(){
        this.props.dispatch(courseActions.createCourse(this.state.course));
    }

    courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Courses</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title}
                />
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onCLickSave}
                />
            </div>
        );
    }
}

CoursesPage.propTypes= {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps)
{
    return {
        courses : state.courses
    };
}


export default connect(mapStateToProps)( CoursesPage);