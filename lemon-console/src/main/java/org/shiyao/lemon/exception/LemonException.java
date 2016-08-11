package org.shiyao.lemon.exception;

public class LemonException extends RuntimeException{
	private static final long serialVersionUID = -6431532266148312521L;

	public LemonException() {
		super();
	}

	public LemonException(String message, Throwable cause) {
		super(message, cause);
	}

	public LemonException(String message) {
		super(message);
	}

	public LemonException(Throwable cause) {
		super(cause);
	}
}
