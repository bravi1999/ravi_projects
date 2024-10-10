import { Component } from "react";
import Header from "../Header";
import './index.css'

const HomePage = () => {
    return(
        <>
        <div className="home-container">
            <Header/>
            <div className="home-content">
                <h1>Find The Job That Fits Your Life</h1>
                <p className="home-job-about">Millions of people are searching for jobs, salary, Information, Company reviews. Find the job that fit your abilities and potential</p>
                <button className="find-jobs-btn" type="button">Find Jobs</button>
            </div>
        </div>
        </>
    )
}

export default HomePage