import {
    TilePortfolioWrapper,
    TilePortfolioTitle,
    TilePortfolioContainer,
    TilePortfolioList,
    TilePortfolioListItem,
    TilePortfolioLink
} from "./styled.js";

const TilePortfolio = () => {

    return (
        <TilePortfolioWrapper>
            <TilePortfolioContainer>
                <TilePortfolioTitle>My-VR-CV</TilePortfolioTitle>
                <TilePortfolioList>
                    <TilePortfolioListItem>
                        In this project I'd like to show a little more about my past experiences - education, work history etc.
                    </TilePortfolioListItem>
                    <TilePortfolioListItem>Demo:
                        <TilePortfolioLink href="https://hirazuku.github.io/My-VR-CV/">
                            https://hirazuku.github.io/My-VR-CV/
                        </TilePortfolioLink>
                    </TilePortfolioListItem>
                    <TilePortfolioListItem>Code:
                        <TilePortfolioLink href="https://github.com/Hirazuku/My-VR-CV">
                            https://github.com/Hirazuku/My-VR-CV
                        </TilePortfolioLink>
                    </TilePortfolioListItem>
                </TilePortfolioList>
            </TilePortfolioContainer>
            <TilePortfolioContainer>
                <TilePortfolioTitle>Kuchnia-u-Kowala</TilePortfolioTitle>
                <TilePortfolioList>
                    <TilePortfolioListItem>
                        Using this simple app you can make your list of products to buy without the need to search for what products you need for those meals
                    </TilePortfolioListItem>
                    <TilePortfolioListItem>Demo:
                        <TilePortfolioLink href="https://hirazuku.github.io/Kuchnia-u-Kowala/">
                            https://hirazuku.github.io/Kuchnia-u-Kowala/
                        </TilePortfolioLink>
                    </TilePortfolioListItem>
                    <TilePortfolioListItem>Code:
                        <TilePortfolioLink href="https://github.com/Hirazuku/Kuchnia-u-Kowala">
                            https://github.com/Hirazuku/Kuchnia-u-Kowala
                        </TilePortfolioLink>
                    </TilePortfolioListItem>
                </TilePortfolioList>
            </TilePortfolioContainer>
        </TilePortfolioWrapper>
    )
};

export default TilePortfolio;