export function Input(props: any) {
  return (
    <div className="mb-3">
      <label htmlFor={props.id} className="form-label">{props.name}</label>
      <input type={props.type} placeholder={props.placeholder} className="form-control" id={props.id} />
    </div>
  )
}