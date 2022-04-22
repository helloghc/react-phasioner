import React from 'react'
import styled from 'styled-components'

import ButtonPrmary from '../../../Components/ButtonPrimary';
import DropDown from '../../../Components/DropDown';
import useUser from '../../../Hooks/useUser';
import { ProductModel } from '../../../Models/product_model';
import ClotesProduct from '../Components/ClotesProduct';

export default function Clotes() {
    const { profile } = useUser();
  return (
      <ClotesLayout>
        <div className='option-clotes'>
            <div className='clotes-btn'>
                <ButtonPrmary text={'SUBIR ARTÍCULO'}/>
            </div>
            <div className='clotes-filters'>
                <h4>{profile?.products.length ?? 0} ARTÍCILOS</h4>
                <p className='spacerw5'>

                </p>
                <DropDown/>
            </div>
        </div>
        <div>
            <div className='clotes-list'>
                {
                    profile?.products.map((product: ProductModel) => {
                        return <ClotesProduct product={product}/>
                    })
                }
              
            </div>
        </div>
      </ClotesLayout>
  )
}

const ClotesLayout = styled.div`
    .option-clotes {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .clotes-btn {
        display: flex;
        width: 30%;
    }

    .clotes-filters {
        display: flex;
    }

    @media screen and (max-width: 768px) {
        .option-clotes {
            flex-direction: column;
            align-items: flex-end;
        }

        .clotes-btn{
            width: 100%;
            margin-bottom: 1em;
        }
    }
`;
