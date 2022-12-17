export const formatDate = (date) => {
  const hrs = new Date(date).getHours();
  const mins = new Date(date).getMinutes();
  return `${hrs < 10 ? "0" + hrs : hrs}:${mins < 10 ? "0" + mins : mins}`;
};

export const downloadMedia = (e, fileUrl) => {
  e.preventDefault();
  try {
    fetch(fileUrl)
      .then((res) => res.blob())
      .then((blob) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;

        const nameSplit = fileUrl.split("/");
        const duplicateNeme = nameSplit.pop();

        a.download = "" + duplicateNeme + "";

        // Append to html link element page
        document.body.appendChild(a);
        // Start download
        a.click();
        // Clean up and remove the link
        window.URL.revokeObjectURL(url);
      })
      .catch((err) => console.log("Error while downloading the image", err));
  } catch (err) {
    console.log("Error while downloading the image", err);
  }
};
