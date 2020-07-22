import React, { useState } from 'react'
import RestaurantAPI from '../../../services/apis/restaurant'
import styled from 'styled-components'

export default function Gallery(props) {
    const { restaurant } = props
    const [highlightId, setHighlighId] = useState(restaurant.cover[0].id)
    const highlightCover = restaurant.cover.find(cover => cover.id === highlightId)

    const firstId = restaurant.cover[0].id
    const lastId = restaurant.cover[restaurant.cover.length - 1].id

    function prevImage() {
        if (highlightId - 1 < firstId) {
            setHighlighId(lastId)
        } else {
            const prevId = highlightId - 1
            setHighlighId(prevId)
        }
    }

    function nextImage() {
        if (highlightId + 1 > lastId) {
            setHighlighId(firstId)
        } else {
            const nextId = highlightId + 1
            setHighlighId(nextId)
        }
    }

    function withoutHighlighted(cover) {
        return cover.id !== highlightId
    }

    return (
        <div className="row">
            <div className="col-10">
                <HightlightImage src={RestaurantAPI.URL + highlightCover.url} />
                <ImageButtonContainer className="d-flex">
                    <ChangeImageButton className="mr-2" onClick={prevImage}>{'<'}</ChangeImageButton>
                    <ChangeImageButton onClick={nextImage}>{'>'}</ChangeImageButton>
                </ImageButtonContainer>
            </div>
            <div className="col-2">
                <div className="d-flex flex-column">
                    {restaurant.cover.filter(withoutHighlighted).map((cover, key) => (
                        <SmallImage 
                            key={key} 
                            src={RestaurantAPI.URL + cover.url} 
                            onClick={() => setHighlighId(cover.id)} 
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

const ImageButtonContainer = styled.div`
    position: absolute;
    margin-top: -20px; 
    margin-left: 20px;
`

const ChangeImageButton = styled.div`
    display: block;
    color: white;
    background-color: black;
    padding: 0.5rem 0;
    width: 50px;
    height: 40px;
    text-align: center;
    &:hover {
        cursor: pointer;
    }
`

const HightlightImage = styled.img`
    object-fit: cover;
    width: 100%; 
    height: 450px;
`

const SmallImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 150px;
`