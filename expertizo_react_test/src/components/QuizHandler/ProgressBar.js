import ProgressBar from 'react-bootstrap/ProgressBar';

const QuizProgressBar = ({progress}) => {
    return (
        <ProgressBar now={progress} />
    )
}

export default QuizProgressBar;