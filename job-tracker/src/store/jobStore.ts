import { create } from "zustand";

interface Job {
    id:number;
    company:string;
    position:string;
    status:string;
}

interface JobState {
    jobs: Job[];
    addJob:(job:Job)=>void;
}

export const useJobStore=create<JobState>((set)=>({

    jobs:[],

    addJob:(job)=>
        set((state)=>({
            jobs:[...state.jobs,job]
        }))

}));