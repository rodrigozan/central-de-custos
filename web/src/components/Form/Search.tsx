export function Search(props: any) {
  return (
    <div className="input-group mb-3">
      <label htmlFor={props.id} className="form-label">{props.name}</label>
      <input type={props.typeInput} placeholder={props.placeholder} className="form-control" id={props.id} />
      <button className={props.classButton} type={props.typeButton}>Button</button>
    </div>
  )
}