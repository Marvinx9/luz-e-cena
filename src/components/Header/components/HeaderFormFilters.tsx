import { FaAngleDown } from "react-icons/fa6";
import SelectorGroup from "../../Selector/SelectorGroup";
import SelectorOption from "../../Selector/SelectorOption";

const cidades = [
  { id: 1, nome: "Fortaleza" },
  { id: 2, nome: "Rio de Janeiro" },
  { id: 3, nome: "Bahia" },
  { id: 4, nome: "Belo Horizonte" },
  { id: 5, nome: "Acre" },
];

const HeaderFormFilters = () => {
  return (
    <form>
      <SelectorGroup id="cidade" icon={<FaAngleDown />}>
        <SelectorOption value="" label="Escolha sua cidade..." />
        {cidades.map((cidade) => {
          return (
            <SelectorOption
              key={cidade.id}
              value={cidade.nome}
              label={cidade.nome}
            />
          );
        })}
      </SelectorGroup>
    </form>
  );
};

export default HeaderFormFilters;
