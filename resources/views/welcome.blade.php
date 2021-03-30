@extends('layouts.app')

@section('content')
    <div class="">
        @guest
            <div class="">
                <nav-guest />

            </div>
        @else
        @if ($rol==1)
        <div class="">
            <nav-admin title="home" />
        </div>
        @endif
        @if ($rol==2)
        <div class="">
            <nav-agent />
        </div>
        @endif
        @if ($rol==3)
        <div class="">
            <nav-user>
        </div>
        @endif
        @endguest
        <div class="">
            <properties />

        </div>
    </div>
@endsection
