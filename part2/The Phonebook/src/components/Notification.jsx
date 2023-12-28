const Notification = ({ message, isSuccess }) => {
  let errorStyle = {
    display: 'none'
  };

  if (isSuccess === true) {
    errorStyle = {
      color: 'green'
    }
  } else if (isSuccess === false) {
    errorStyle = {
      color: 'red'
    }
  }
  
    return (
      <div className='error' style={errorStyle}>
        {message}
      </div>
    )
  }

export default Notification