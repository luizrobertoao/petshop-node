let listaPets = [];

let adicionarPet = nomePet => {
    listaPets.push(nomePet);
    console.log(listaPets)
    return true;
};

module.exports = {adicionarPet}
