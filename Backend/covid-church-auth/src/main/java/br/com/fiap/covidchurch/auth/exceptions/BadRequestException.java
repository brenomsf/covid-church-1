package br.com.fiap.covidchurch.auth.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class BadRequestException extends Exception{

	private static final long serialVersionUID = 6426427043743579446L;

	public BadRequestException(String message) {
		super(message);
	}
	
}