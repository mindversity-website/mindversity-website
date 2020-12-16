import { NextPage } from "next";
import Head from "next/head";
import Footer from "components/Footer";
import Header from "components/Header";
import CreateJournalEntry from "components/CreateJournalEntry";
const Create: NextPage = () => {
    return(
        <main>
            <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css" />
            <Header/>
            <CreateJournalEntry/>
            <Footer/>
        </main>
    );

}

export default Create;