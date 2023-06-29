const Icon = ( params ) =>
{
  const icon = require( "../images/" + params.src ); 
  return (
    <img className="icons" src={ icon } alt="icon" />
  );
}

export default Icon;