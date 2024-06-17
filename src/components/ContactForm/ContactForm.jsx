export const ContactForm = () => {
  return (
    <>
      <form action="">
        <label htmlFor="Name">
          Name
          <input type="tel" name="number" required />
        </label>
        <label htmlFor="number">
          number
          <input type="num" name="number" required />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};
