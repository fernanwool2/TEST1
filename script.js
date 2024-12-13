document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.qa-question');
    
    questions.forEach(function(question) {
      question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const isVisible = answer.style.display === 'block';
        document.querySelectorAll('.qa-answer').forEach(ans => ans.style.display = 'none');
        answer.style.display = isVisible ? 'none' : 'block';
      });
    });
  });
  