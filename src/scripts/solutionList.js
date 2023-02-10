const solutionList = document.querySelector("#solutionlist");

const solutionListData = [
  {
    title: "Educação",
    paragraph:
      "Educação Seu conhecimento em um curso online, ebook ou mentoria",
    images: [
        "./src/assets/solutions/g4-solution.svg",
        "./src/assets/solutions/melver-solution.svg"
    ]
  },
  {
    title: "SaaS",
    paragraph:
      "Pagamentos perfeitos para o seu negócio digital escalar com customização por API",
    images: [
        "./src/assets/solutions/tradeinsights-solution.svg",
        "./src/assets/solutions/divi-hub-solution.svg"
    ]
  },
  {
    title: "Gaming",
    paragraph:
      "Uma experiência de pagamento perfeita para desbloquear mais jogadores online",
    images: [
        "./src/assets/solutions/loud-solution.svg",
        "./src/assets/solutions/cidade-alta-solution.svg"
    ]
  },
  {
    title: "Notícias",
    paragraph:
      "Conteúdos exclusivos e pagos ou doações pelo conteúdo entregue para a sua audiência",
    images: [
        "./src/assets/solutions/bmc-solution.svg",
        "./src/assets/solutions/flow-solution.svg"
    ]
  },
  {
    title: "Investimentos",
    paragraph:
      "Planejamento qualificado e ofertas imperdíveis para o planejamento financeiro de seus clientes",
    images: [
        "./src/assets/solutions/captable-solution.svg",
        "./src/assets/solutions/eqi-solution.svg"
    ]
  },
  {
    title: "Finanças",
    paragraph:
      "De planejamento financeiro familiar a certificação de uma nova carreira financeira",
    images: [
        "./src/assets/solutions/estrategia-solution.svg",
        "./src/assets/solutions/eurico-solution.svg"
    ]
  },
];

export const createSolutionList = () => {
    solutionListData.forEach((elem) => {
        const div = document.createElement("div");
        div.className = "solutionItem";
        
        const h2 = document.createElement("h2")
        h2.innerText = elem.title
        
        const p = document.createElement("p")
        p.innerText = elem.paragraph

        const divImage = document.createElement("div")
        const img1 = document.createElement("img")

        img1.src = elem.images[0]
        img1.alt = "logo image"

        const img2 = document.createElement("img")
        img2.src = elem.images[1]
        img2.alt = "logo image"

        divImage.append(img1, img2)
        divImage.className = "solutioImages"

        div.append(h2, p, divImage)

        solutionList.appendChild(div)
    })
}
