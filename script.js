        var music = document.getElementById("music");
        var musicT = document.getElementById("musicT");

        var fname = document.getElementById("fname");
        var password = document.getElementById("password");

        var submitMusic = document.getElementById("submitMusic");

        function inputFunction()
        {
            {
                if(music.paused)
                {
                    music.play();
                }
                else{
                    music.pause();
                }
            }
        }


        function inputTFunction()
        {
            {
                if(musicT.paused)
                {
                    musicT.play();
                }
                else{
                    musicT.pause();
                }
            }
        }

        function submitSound()
        {
            {
                if(submitMusic.paused)
                {
                    submitMusic.play();
                }
                else
                {
                    submitMusic.pause();
                }
            }
        }