/**
    A student's performance in lab activities should always improve, but that is not always the case.
    Since progress is one of the most important metrics for a student, let’s write a program that computes the longest period of increasing performance for any given student.
    For example, if his grades for all lab activities in a course are: 9, 7, 8, 2, 5, 5, 8, 7 then the longest period would be 4 consecutive labs (2, 5, 5, 8).
    Given an array with the lab grades of a student
    Your task is to
    write a function that computes and prints to standard output (stdout) the longest period of increasing performance for the student that has these grades
    Note that your function will receive the following arguments:
    grades
    which is an array containing the grades of the student
 */

function longest_improvement(grades) {
    var tam = grades.length;
    var count = 1;
    var longest = 1;

    for (var i = 0; i < tam; i++) {
        if(grades[i] < grades[i-1]){
            count = 1;
        }
        else {
            count++;
            if(count >= longest)
                longest = count;
        }
    };
    console.log(longest);
}

longest_improvement([1, 7, 2, 5, 6, 9, 11, 11, 1, 6, 1])