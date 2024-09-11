import { useState, useEffect } from "react";
import axios from 'axios'

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError  ] = useState(null)

    const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/estimated-salary',
        params: {
          job_title: 'NodeJS Developer',
          location: 'New-York, NY, USA',
          radius: '100'
        },
        headers: {
          'x-rapidapi-key': '6a45c2f1d2mshc104b47935e7161p1f474ajsnba345c740b4c',
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
      };

}