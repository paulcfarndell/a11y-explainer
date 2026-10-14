import { useParams } from "react-router";

export default function IssuePage(){
    const { issueId } = useParams<{ issueId: string }>()
    return <h1 className="text-3xl font-bold">Issue: {issueId ?? 'unknown'}</h1>
}