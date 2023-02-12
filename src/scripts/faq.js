const containerFaq = document.querySelector("#faq")

const objectFaq = [
    {
        title: "Como criar minha conta?",
        text: "Crie sua conta na Boomp em 10 minutos. Escolha o plano que se encaixa melhor para você, complete seu cadastro com suas informações de pessoa física ou jurídica e os seus dados bancários. A partir daí você já pode começar a usar a Boomp para alavancar suas vendas."
    },
    {
        title: "O que posso fazer com Boomp",
        text: "A Boomp é uma plataforma de pagamentos com soluções para empresas e consumidores. Aqui na Boomp, você consegue fazer split de pagamentos, oferecer planos mensais ou anuais para seus clientes com a nossa opção de pagamento recorrente, integrar com diversas plataformas de sistema de gerenciamento e vendas online e transferências internacionais."
    },
    {
        title: "Como vou receber o valor das minhas vendas?",
        text: "Você vai receber o seu pagamento na conta bancária cadastrada no nosso sistema no prazo determinado do plano escolhido."
    },
    {
        title: "Qual plano escolher?",
        text: "Na Boomp, você pode escolher um dos seguintes planos sem pagar nada para ter sua conta: Se você é autônomo, escolha o plano básico. Ele tem a menor taxa do mercado e te permite receber via Pix, cartão (parcelado ou à vista) ou boleto. Consulte as taxas da operação aqui. Se você tem uma startup, escolha o plano profissional. Receba em até um dia útil pelo Pix, em 30 dias para pagamentos em cartão e no mesmo dia do pagamento via boleto. Se você cria para a internet como infoprodutor, escolha o plano Creators e receba em 1 dia pelo Pix, em até 15 dias via cartão e no mesmo dia pelo boleto bancário."
    }
]

export const createFaq = () => {
    objectFaq.forEach((elem) => {
        const divFaq = document.createElement("div");

        const divTitle = document.createElement("div");
        divTitle.className = "containerFaq__title"

        const h2 = document.createElement("h2");
        h2.innerText = elem.title

        const img = document.createElement("img");
        img.src = "../assets/global/simple-arrow.svg"

        const divText = document.createElement("div");
        divText.className = "containerFaq__text_0 containerFaq__text"
        elem.title == "Qual plano escolher?" && divText.classList.add("textWhite")

        const p = document.createElement("p");
        p.innerText = elem.text

        divTitle.append(h2, img)
        divText.append(p)

        divFaq.append(divTitle, divText);
        containerFaq.appendChild(divFaq)

        
        divTitle.addEventListener("click", ()  => {
            divText.classList.remove("containerFaq__text_0")
            
            img.classList.toggle("openImg")
            
            elem.title != "Qual plano escolher?" ? divText.classList.toggle('open') : divText.classList.toggle("textWhiteOpen");
        })
    })
}