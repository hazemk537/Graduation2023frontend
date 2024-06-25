import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { actions } from '../redux/slices/NotifySlice';

function useFetch(url, options) {

    const [data, setData] = useState('');
    const dispatch = useDispatch()

    useEffect(() => {

        async function sendRequest() {

            dispatch(actions.setPending(`${options?.name}`))
            // this .? handle if the options. is not exist
            let optionsObj
            if (!options?.token && !options?.body) {
                optionsObj = {
                    method: options?.method, headers: {
                        'Content-Type': 'application/json',

                    }
                }
            }
            else if (!options?.body) {
                optionsObj = {
                    method: options?.method, headers: {
                        'Content-Type': 'application/json',

                        'Authorization': `Bearer ${options.token}`

                    }
                }
            } 
            let response = await fetch(url,optionsObj)


            try {

                if (response.ok) {
                    console.log(` response.ok in ${options?.name} ...`)
                    // dispatch(actions.setSuccess(`${options?.name} response.ok ...`))




                } else {
                    dispatch(actions.setError(`Err in ${options?.name} `))//for user

                    throw new Error(`Err in ${options?.name} ...`)


                }

                let jsonData = await response.json()

                if (jsonData.succeeded || jsonData.hasOwnProperty('data')) {
                    console.log(` jsonData.succeeded in ${options?.name} ...`)//for devs
                    dispatch(actions.setError(`Err in ${options?.name} `))//for user

                    setData(jsonData.data)


                }

            }

            catch (err) {

                console.log(err)//for devs


            }
            console.log(data);


        }
        sendRequest()

    }

        , [])

    return [data, setData]//return the result state


}

export default useFetch