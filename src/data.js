// CopyToClipBoard

const email = "ajeetheswari14@gmail.com";

export const handleCopyEmail = () => {
  navigator.clipboard
    .writeText(email)
    .then(() => {
      alert(`Email copied to clipboard: ${email} `);
    })
    .catch((err) => {
      alert(`Failed to copy email to clipboard: ${err}`);
    });
};
