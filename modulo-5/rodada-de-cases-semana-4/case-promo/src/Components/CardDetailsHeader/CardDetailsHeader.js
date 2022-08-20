import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { image_Url } from '../../constants/image_Url'
import { goToHome } from '../../routes/coordinator'
import { Content, Grafico, MainContainer, Overview, PosterBox, StaffList, Subtitle, TextBox, Title, Top } from './styled'
import { getCredit } from '../../hooks/getCredit';
import { VictoryPie } from "victory"

const CardDetailsHeader = (detalhes) => {
    const navigate = useNavigate()
    const location = useLocation()
    const params = useParams()

    const generos = detalhes.detalhes.genres
    const [cast, servant] = getCredit(params.id, location.pathname)

    console.log(servant);

    const director = servant.filter((cargo) => {
        return cargo.job === "director"
    })

    const productors = servant.filter((cargo) => {
        return cargo.job === "Producer"
    })


    const nota = Number(detalhes.detalhes.vote_average)
    const notaRestante = Number(10 - nota)

    const data = {
        hidden: true,
        datasets: [
            {
                data: [nota, notaRestante],
                backgroundColor: [
                    '#14FF00',
                    'rgba(255, 255, 255, 0.1)',
                ],
                borderColor: [
                    '#14FF00',
                    'rgba(255, 255, 255, 0.1)',
                ],
                borderWidth: 2,
            },
        ],
    };

    return (
        <MainContainer>
            <Top>
                <p>
                    TMDB
                </p>
                <div onClick={() => goToHome(navigate)}></div>
            </Top>
            <Content>
                <PosterBox>
                    <img src={`${image_Url}/${detalhes.detalhes.poster_path}`} />
                </PosterBox>
                <TextBox>
                    {detalhes.detalhes.title ?
                        <Title>
                            <h2>{detalhes.detalhes.title} ({moment(detalhes.detalhes.release_date).format("YYYY")})</h2>
                            <Subtitle>
                                <p>{moment(detalhes.detalhes.release_date).format("DD/MM/YYYY")} ({detalhes.detalhes.original_language.toUpperCase()}) •
                                </p>
                                {generos.map((genero) => {
                                    return <p key={genero.id}>{genero.name} • </p>
                                })}

                            </Subtitle>
                            <Grafico>
                                <div>
                                    <VictoryPie data={data}
                                        innerRadius={45}
                                        colorScale="qualitative"
                                        labelPlacement={"parallel"}
                                    />
                                </div>
                                <p>Avaliação dos usuários</p>
                            </Grafico>
                        </Title>
                        :
                        <div>Carregando informações</div>
                    }

                    <Overview>
                        <strong> Sinopse </strong>
                        <p>{detalhes.detalhes.overview}</p>
                    </Overview>
                    <StaffList>
                        {director.length > 0 ? director.map((diretor) => {
                            return <div>
                                <p><strong>{diretor.name}</strong></p>
                                <p>{diretor.job}</p>
                            </div>
                        }) : <div></div>}
                        {productors.length > 0 ? productors.map((produtor) => {
                            return <div>
                                <p><strong>{produtor.name}</strong></p>
                                <p>{produtor.job}</p>
                            </div>
                        }) : <div></div>}
                    </StaffList>
                </TextBox>
            </Content>
        </MainContainer>
    )
}

export default CardDetailsHeader