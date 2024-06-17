import React from "react";
import MainCardsStyled from "./MainCardsStyled";

interface MainCardsProps {
  switchCards?: boolean;
  children: React.ReactNode;
}

function MainCards({ switchCards, children }: MainCardsProps) {
  return (
    <>
      {switchCards ? <>{children}</> : ""}
      <MainCardsStyled>
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
          accusantium aliquam doloremque libero accusamus commodi porro, cum
          voluptatem voluptatum possimus deleniti maiores ipsam ad deserunt
          blanditiis facilis numquam labore quo. Doloribus in eveniet totam,
          consequatur veniam a, ducimus optio non suscipit vitae eum
          perspiciatis, veritatis qui voluptates hic quibusdam illo soluta iure
          dolore blanditiis. Deleniti aut provident dicta? Qui, ut. Minus
          assumenda alias saepe quis pariatur aperiam cumque ad fugit cum iure
          dolorem suscipit minima reiciendis illo laborum ab commodi repellat
          amet, numquam dolores, unde sequi, consequatur quasi. Nesciunt,
          possimus! Quidem maxime numquam blanditiis, nulla voluptatem quis
          recusandae dignissimos est laborum repellat eaque! Natus dolorum
          eveniet distinctio quia quidem culpa architecto? Deleniti saepe vel
          corporis tenetur reiciendis animi! Nostrum, inventore! Dolore nostrum
          dolorem sed maiores aperiam quo laboriosam libero maxime temporibus.
          Obcaecati id expedita dolores eveniet accusantium dicta doloremque
          iste veniam voluptate? Molestias accusantium quidem, esse quos
          praesentium nihil dolorum?
        </p>
      </MainCardsStyled>
      {switchCards ? "" : <>{children}</>}
    </>
  );
}

export default MainCards;
