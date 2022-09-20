const adviceUp = async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    let datos = await res.json();

    document.getElementById("text-advice").innerHTML = `"${datos.slip.advice}"`;
    document.getElementById("num-advice").innerHTML = `${datos.slip.id}`;
  } catch (error) {
    console.log("error");
  }
};

adviceUp();
