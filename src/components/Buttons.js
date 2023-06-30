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

export const Spinner = ( params ) =>
{
  return (
    <div className="row-align center gap-15">
        <MinusButn onClick={() => params.decrement()} />
        {params.count}
        <PlusButn onClick={() => params.increment()} />
    </div>
  );
}