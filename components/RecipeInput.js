export default function RecipeInput(props) {
  function handleSubmit() {}
  return (
    <div>
      <form action={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
