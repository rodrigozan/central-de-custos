export function Button(props: any) {
  return (
    <div className="d-grid gap-2">
      <button className={props.class} type={props.type}>{props.name}</button>
    </div>
  )
}