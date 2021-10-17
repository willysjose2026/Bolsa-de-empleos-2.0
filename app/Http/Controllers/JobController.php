<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Job::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $job = new Job();
        $job->id = $request->id;
        $job->category_id = $request->category_id;
        $job->job_type_id = $request->job_type_id;
        $job->user_id = $request->user_id;
        $job->logo_url = $request->logo_url;
        $job->job_url = $request->job_url;
        $job->company_name = $request->company_name;
        $job->position = $request->position;
        $job->location = $request->location;
        $job->email = $request->email;
        $job->description = $request->description;
        $job->how_to_applay = $request->how_to_applay;

        $job->save();

        return $job;

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        return Job::findOrFail($request->id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function edit(Job $job)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $job = Job::findOrFail($request->id);
        $job->id = $request->id;
        $job->category_id = $request->category_id;
        $job->job_type_id = $request->job_type_id;
        $job->user_id = $request->user_id;
        $job->logo_url = $request->logo_url;
        $job->job_url = $request->job_url;
        $job->company_name = $request->company_name;
        $job->position = $request->position;
        $job->location = $request->location;
        $job->email = $request->email;
        $job->description = $request->description;
        $job->how_to_applay = $request->how_to_applay;

        $job->save();

        return $job;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        return Job::destroy($request->id);
    }
}
