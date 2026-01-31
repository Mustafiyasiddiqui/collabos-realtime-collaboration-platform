export default function AuthForm({ title, buttonText, fields, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <h2>{title}</h2>
      {fields.map((field) => (
        <div key={field.name}>
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            required
          />
        </div>
      ))}
      <button type="submit">{buttonText}</button>
    </form>
  );
}
