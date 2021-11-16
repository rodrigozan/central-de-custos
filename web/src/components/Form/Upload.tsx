export function Upload(props: any) {
  return (
    <div className="mb-3">
      <label htmlFor={props.id} className="form-label">{props.name}</label>
      <input type="file" className="form-control" id={props.id} />
    </div>
  )
}