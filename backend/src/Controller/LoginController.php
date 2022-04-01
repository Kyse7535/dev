<?php

namespace App\Controller;

use App\Entity\User;
use phpDocumentor\Reflection\Types\This;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UserRepository;

class LoginController extends AbstractController
{
    #[Route('/login', name: 'app_login', methods: ['POST'])]
    public function index(Request $request, UserRepository $userRepository): Response
    {

        $username = $request->query->get('username');
        $password = $request->query->get('password');

        $currentUser = $userRepository->findOneBy(['username' => $username]);


        if ($currentUser == null) {
            return $this->json(
                ['message' => 'missing credentials',
            "status" => Response::HTTP_UNAUTHORIZED]
            );
        }


        if ($currentUser->getPassword() == $password) {
            return $this->json(
                [
                    'user'  => $currentUser->getUserIdentifier(),
                ]
            );
        }
        return $this->json(
        ['message' => 'missing credentials',
            Response::HTTP_UNAUTHORIZED]
    );
    }

    #[Route('/register', name: 'register', methods: 'POST')]
    public function register(Request $request, UserRepository $userRepository): Response {
        $username = $request->query->get('username');
        $password = $request->query->get('password');

        $user = $userRepository->findOneBy(['username' => $username]);

        if ($user != null) {
            return $this->json(
                [
                    'message' => "username déjà existant",
                    "status" => Response::HTTP_UNAUTHORIZED
                ]
            );
        }
        $user = new User();
        $user->setUsername($username);
        $user->setPassword($password);

        $userRepository->add($user);
        return $this->json(
            [
                'message' => "utilisateur enregistré",
                "status" => Response::HTTP_OK
            ]
        );
    }


}
