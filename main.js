const adviceUp = async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    let datos = await res.json();

    document.getElementById("text-advice").innerHTML = `"${datos.slip.advice}"`;
  } catch (error) {
    console.log("error");
  }
};

adviceUp();
