import { NextPage, NextPageContext } from 'next'
import Head from "next/head";
import React, { useRef, FormEvent } from 'react'
import { Resource } from 'utils/types'
import { getResources } from "requests/Resource";
import Navigation from "components/Portal/Navigation";
import Router from 'next/router';
import urls from 'utils/urls'

interface Props {
    resource: Resource;
}


const editResourcePage: NextPage<Props> = ({resource}) => {

    const nameEle = useRef<HTMLInputElement>(null)
    const cateEle = useRef<HTMLSelectElement>(null)
    const linkEle = useRef<HTMLInputElement>(null)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const chagedResource: Resource = {
            _id: resource._id,
            name: nameEle.current?.value,
            category: cateEle.current?.value,
            link: linkEle.current?.value,
        }

        const response = await fetch(`${urls.baseUrl}${urls.api.resource.update}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(chagedResource)
        })

        Router.push('/portal/resources')
    }


    return (
        <div className="container">

        <Head>
            <title>MindVersity | Admin Portal</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navigation />

        <div className="bodyContent">
                <h1>Edit Resource</h1>
                <div className="formContainer">
                    <form onSubmit={handleSubmit} method="post">
                        <label htmlFor="name">Resource Name</label>
                        <input ref={nameEle} type="text" name="name" placeholder="Resource Name" defaultValue={resource.name} required/>
                        <label htmlFor="category">Category</label>
                        <select ref={cateEle} name="category" id="categoryChoice" defaultValue={resource.category || "national"}>
                            <option value="national">National</option>
                            <option value="mindversity">Mindversity</option>
                            <option value="help">Help</option>
                        </select>
                        <label htmlFor="linkornumber">Link or Phone Number</label>
                        <input ref={linkEle} type="text" name="link" placeholder="Link or Phone Number" defaultValue={resource.link}/>
                        <input type="submit" value="Update" className="submitInput"/>
                    </form>
                </div>
            </div>

            <style jsx>{`
            .container{
                padding-top: 50px;
                text-align: left;
            }

            @media screen and (min-width: 1000px){
                .bodyContent{
                    width: auto;
                    height: auto;
                    position: relative;
                    display: body;
                    margin-left: 375px;
                }
            }

            h1{
                color: black;
                padding: 0px 40px;
            }

            .formContainer{
                width: 100%;
                height: auto;
                position: relative;
                display: block;
                padding: 20px 40px;
                text-align: center;
            }

            input[type=text], select, textarea {
                height: auto;
                width: 75%;
                padding: 10px 15px;
                position: relative;
                display: block;
                border: none;
                font-size: 16px;
                margin-bottom: 15px;
                outline: none;
                border-radius: 5px;
                background-color: #eae0f1;
                font-family: inherit;
            }

            textarea{
                min-height: 150px;
                resize: vertical;
            }

            label{
                display: block;
                margin-bottom: 5px;
                padding-left: 5px;
                text-align: left;
                font-size: 16px;
            }

            .submitInput {
                height: auto;
                width: auto;
                padding: 10px 40px;
                position: relative;
                display: block;
                border: none;
                font-size: 16px;
                margin-top: 40px;
                outline: none;
                border-radius: 6px;
                background-color: #8c69aa;
                color: white;
                transition: background 0.5s ease;
            }

            .submitInput:hover {
                cursor: pointer;
                background-color: #b59ccc;
            }
            `}</style>

            <style jsx global>{`
            html,
            body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
                    Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
                    Helvetica Neue, sans-serif;
            }
            * {
                box-sizing: border-box;
            }
            `}</style>
        </div>
    )
}

editResourcePage.getInitialProps = async (context: NextPageContext) => {
    let resourceQuery: Resource = {_id: context.query.id as string}
    let resource: Resource[] = await getResources(resourceQuery)

    if(resource.length === 0) {
        Router.replace('/portal/dashboard')
    }

    return {
        resource: resource[0]
    }
}

export default editResourcePage;