module.exports = (req, res) => {
  return `<div>
        <form method="POST">
            <input name="email" placeholder="email" />
            <input name="password" placeholder="password" />
            <input name="passwordConfirmation" placeholder="password Confirmation" />
            <button>Sign Up</button>
        </form>
    </div>
    `;
};
