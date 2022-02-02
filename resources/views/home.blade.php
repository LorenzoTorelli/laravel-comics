@extends('layouts.layoutBase')

@section('pageTitle')
    DC Comics
@endsection

@section('pageContent')
    <div id="jumbo"></div>
    <div class="container container-main">
        @foreach ($comics as $key=>$item)
        <div class="comic">
            <div class="img-container">
                <a href="/{{$key}}""><img src="{{$item['thumb']}}"  salt="{{$item['title']}}"></a>
            </div>
            <div class="text-container">
                <a href="/{{$key}}">{{$item['series']}}</a>
            </div>
        </div>
        @endforeach
    </div>
@endsection