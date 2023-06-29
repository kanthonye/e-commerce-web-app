export const PlusButn = ( params ) => 
{
  return (
    <div>
        <button onClick={() => params.onClick()} className="circle-butn">&#43;</button>
    </div>
  );
}


export const MinusButn = ( params ) => 
{
  return (
    <div>
        <button onClick={() => params.onClick()} className="circle-butn-white">&#8722;</button>
    </div>
  );
}

export const XButn = ( params ) => 
{
  return (
    <div>
        <button onClick={() => params.onClick()} className="x-butn">&#215;</button>
    </div>
  );
}
