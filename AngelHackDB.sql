PGDMP     /        	            |         	   AngelHack    15.2    15.2 9    P           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            Q           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            R           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            S           1262    35605 	   AngelHack    DATABASE     �   CREATE DATABASE "AngelHack" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Singapore.1252';
    DROP DATABASE "AngelHack";
                postgres    false            �            1259    35631    Activity    TABLE     �   CREATE TABLE public."Activity" (
    activity_id bigint NOT NULL,
    activity_name character varying NOT NULL,
    location character varying NOT NULL,
    lat numeric,
    lon numeric,
    owner_id bigint NOT NULL
);
    DROP TABLE public."Activity";
       public         heap    postgres    false            �            1259    35668    Activity-Category    TABLE     {   CREATE TABLE public."Activity-Category" (
    activity_name character varying NOT NULL,
    category_id bigint NOT NULL
);
 '   DROP TABLE public."Activity-Category";
       public         heap    postgres    false            �            1259    35630    Activity_activity_id_seq    SEQUENCE     �   ALTER TABLE public."Activity" ALTER COLUMN activity_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Activity_activity_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    221            �            1259    35615    Category    TABLE     r   CREATE TABLE public."Category" (
    category_id bigint NOT NULL,
    category_name character varying NOT NULL
);
    DROP TABLE public."Category";
       public         heap    postgres    false            �            1259    35614    Category_category_id_seq    SEQUENCE     �   ALTER TABLE public."Category" ALTER COLUMN category_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Category_category_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    217            �            1259    35623    Organisation    TABLE     �   CREATE TABLE public."Organisation" (
    organisation_id bigint NOT NULL,
    organization_name character varying NOT NULL,
    owner_id bigint NOT NULL
);
 "   DROP TABLE public."Organisation";
       public         heap    postgres    false            �            1259    35652    Organisation-Activity    TABLE     �   CREATE TABLE public."Organisation-Activity" (
    activity_name character varying NOT NULL,
    organisation_name character varying NOT NULL
);
 +   DROP TABLE public."Organisation-Activity";
       public         heap    postgres    false            �            1259    35622     Organisation_organisation_id_seq    SEQUENCE     �   ALTER TABLE public."Organisation" ALTER COLUMN organisation_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Organisation_organisation_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    219            �            1259    35773    Party    TABLE     j   CREATE TABLE public."Party" (
    party_id bigint NOT NULL,
    person_name character varying NOT NULL
);
    DROP TABLE public."Party";
       public         heap    postgres    false            �            1259    35606    Person    TABLE     �  CREATE TABLE public."Person" (
    person_id bigint NOT NULL,
    person_name character varying NOT NULL,
    password character varying NOT NULL,
    location character varying,
    lat numeric,
    lon numeric,
    bio character varying,
    email character varying,
    sprite character varying,
    points bigint,
    work character varying,
    interest character varying,
    age bigint
);
    DROP TABLE public."Person";
       public         heap    postgres    false            �            1259    35649    Person-Activity    TABLE     �   CREATE TABLE public."Person-Activity" (
    person_id bigint NOT NULL,
    status character varying NOT NULL,
    activity_name character varying NOT NULL
);
 %   DROP TABLE public."Person-Activity";
       public         heap    postgres    false            �            1259    35659    Person-Category    TABLE     j   CREATE TABLE public."Person-Category" (
    person_id bigint NOT NULL,
    category_id bigint NOT NULL
);
 %   DROP TABLE public."Person-Category";
       public         heap    postgres    false            �            1259    35646    Person-Organisation    TABLE     �   CREATE TABLE public."Person-Organisation" (
    person_id bigint NOT NULL,
    organisation_name character varying NOT NULL,
    status character varying
);
 )   DROP TABLE public."Person-Organisation";
       public         heap    postgres    false            �            1259    35613    Person_person_id_seq    SEQUENCE     �   ALTER TABLE public."Person" ALTER COLUMN person_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Person_person_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    214            �            1259    35639    Posts    TABLE     �   CREATE TABLE public."Posts" (
    post_id bigint NOT NULL,
    post_title character varying NOT NULL,
    post_body character varying,
    poster_name character varying NOT NULL
);
    DROP TABLE public."Posts";
       public         heap    postgres    false            �            1259    35638    Posts_post_id_seq    SEQUENCE     �   ALTER TABLE public."Posts" ALTER COLUMN post_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Posts_post_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    223            E          0    35631    Activity 
   TABLE DATA           ^   COPY public."Activity" (activity_id, activity_name, location, lat, lon, owner_id) FROM stdin;
    public          postgres    false    221   �F       L          0    35668    Activity-Category 
   TABLE DATA           I   COPY public."Activity-Category" (activity_name, category_id) FROM stdin;
    public          postgres    false    228   G       A          0    35615    Category 
   TABLE DATA           @   COPY public."Category" (category_id, category_name) FROM stdin;
    public          postgres    false    217   PG       C          0    35623    Organisation 
   TABLE DATA           V   COPY public."Organisation" (organisation_id, organization_name, owner_id) FROM stdin;
    public          postgres    false    219   �G       J          0    35652    Organisation-Activity 
   TABLE DATA           S   COPY public."Organisation-Activity" (activity_name, organisation_name) FROM stdin;
    public          postgres    false    226   �G       M          0    35773    Party 
   TABLE DATA           8   COPY public."Party" (party_id, person_name) FROM stdin;
    public          postgres    false    229   H       >          0    35606    Person 
   TABLE DATA           �   COPY public."Person" (person_id, person_name, password, location, lat, lon, bio, email, sprite, points, work, interest, age) FROM stdin;
    public          postgres    false    214   �H       I          0    35649    Person-Activity 
   TABLE DATA           M   COPY public."Person-Activity" (person_id, status, activity_name) FROM stdin;
    public          postgres    false    225   tI       K          0    35659    Person-Category 
   TABLE DATA           C   COPY public."Person-Category" (person_id, category_id) FROM stdin;
    public          postgres    false    227   �I       H          0    35646    Person-Organisation 
   TABLE DATA           U   COPY public."Person-Organisation" (person_id, organisation_name, status) FROM stdin;
    public          postgres    false    224   �I       G          0    35639    Posts 
   TABLE DATA           N   COPY public."Posts" (post_id, post_title, post_body, poster_name) FROM stdin;
    public          postgres    false    223   �I       T           0    0    Activity_activity_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."Activity_activity_id_seq"', 13, true);
          public          postgres    false    220            U           0    0    Category_category_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."Category_category_id_seq"', 18, true);
          public          postgres    false    216            V           0    0     Organisation_organisation_id_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public."Organisation_organisation_id_seq"', 1, false);
          public          postgres    false    218            W           0    0    Person_person_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."Person_person_id_seq"', 18, true);
          public          postgres    false    215            X           0    0    Posts_post_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Posts_post_id_seq"', 1, false);
          public          postgres    false    222            �           2606    35637    Activity Activity_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public."Activity"
    ADD CONSTRAINT "Activity_pkey" PRIMARY KEY (activity_id);
 D   ALTER TABLE ONLY public."Activity" DROP CONSTRAINT "Activity_pkey";
       public            postgres    false    221            �           2606    35621    Category Category_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public."Category"
    ADD CONSTRAINT "Category_pkey" PRIMARY KEY (category_id);
 D   ALTER TABLE ONLY public."Category" DROP CONSTRAINT "Category_pkey";
       public            postgres    false    217            �           2606    35629    Organisation Organisation_pkey 
   CONSTRAINT     m   ALTER TABLE ONLY public."Organisation"
    ADD CONSTRAINT "Organisation_pkey" PRIMARY KEY (organisation_id);
 L   ALTER TABLE ONLY public."Organisation" DROP CONSTRAINT "Organisation_pkey";
       public            postgres    false    219            �           2606    35612    Person Person_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public."Person"
    ADD CONSTRAINT "Person_pkey" PRIMARY KEY (person_id);
 @   ALTER TABLE ONLY public."Person" DROP CONSTRAINT "Person_pkey";
       public            postgres    false    214            �           2606    35645    Posts Posts_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public."Posts"
    ADD CONSTRAINT "Posts_pkey" PRIMARY KEY (post_id);
 >   ALTER TABLE ONLY public."Posts" DROP CONSTRAINT "Posts_pkey";
       public            postgres    false    223            �           2606    35667    Activity unique_activity_name 
   CONSTRAINT     c   ALTER TABLE ONLY public."Activity"
    ADD CONSTRAINT unique_activity_name UNIQUE (activity_name);
 I   ALTER TABLE ONLY public."Activity" DROP CONSTRAINT unique_activity_name;
       public            postgres    false    221            �           2606    35658    Category unique_category_name 
   CONSTRAINT     c   ALTER TABLE ONLY public."Category"
    ADD CONSTRAINT unique_category_name UNIQUE (category_name);
 I   ALTER TABLE ONLY public."Category" DROP CONSTRAINT unique_category_name;
       public            postgres    false    217            �           2606    35765    Person unique_email 
   CONSTRAINT     Q   ALTER TABLE ONLY public."Person"
    ADD CONSTRAINT unique_email UNIQUE (email);
 ?   ALTER TABLE ONLY public."Person" DROP CONSTRAINT unique_email;
       public            postgres    false    214            �           2606    35746 %   Organisation unique_organisation_name 
   CONSTRAINT     o   ALTER TABLE ONLY public."Organisation"
    ADD CONSTRAINT unique_organisation_name UNIQUE (organization_name);
 Q   ALTER TABLE ONLY public."Organisation" DROP CONSTRAINT unique_organisation_name;
       public            postgres    false    219            �           2606    35665    Person unique_person_name 
   CONSTRAINT     ]   ALTER TABLE ONLY public."Person"
    ADD CONSTRAINT unique_person_name UNIQUE (person_name);
 E   ALTER TABLE ONLY public."Person" DROP CONSTRAINT unique_person_name;
       public            postgres    false    214            �           2606    35723 $   Activity-Category activity_name_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Activity-Category"
    ADD CONSTRAINT activity_name_fkey FOREIGN KEY (activity_name) REFERENCES public."Activity"(activity_name) NOT VALID;
 P   ALTER TABLE ONLY public."Activity-Category" DROP CONSTRAINT activity_name_fkey;
       public          postgres    false    3234    221    228            �           2606    35735 (   Organisation-Activity activity_name_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Organisation-Activity"
    ADD CONSTRAINT activity_name_fkey FOREIGN KEY (activity_name) REFERENCES public."Activity"(activity_name) NOT VALID;
 T   ALTER TABLE ONLY public."Organisation-Activity" DROP CONSTRAINT activity_name_fkey;
       public          postgres    false    226    3234    221            �           2606    35740 "   Person-Activity activity_name_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Person-Activity"
    ADD CONSTRAINT activity_name_fkey FOREIGN KEY (activity_name) REFERENCES public."Activity"(activity_name) NOT VALID;
 N   ALTER TABLE ONLY public."Person-Activity" DROP CONSTRAINT activity_name_fkey;
       public          postgres    false    221    3234    225            �           2606    35706     Person-Category category_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Person-Category"
    ADD CONSTRAINT category_id_fkey FOREIGN KEY (category_id) REFERENCES public."Category"(category_id) NOT VALID;
 L   ALTER TABLE ONLY public."Person-Category" DROP CONSTRAINT category_id_fkey;
       public          postgres    false    3224    227    217            �           2606    35728 "   Activity-Category category_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Activity-Category"
    ADD CONSTRAINT category_id_fkey FOREIGN KEY (category_id) REFERENCES public."Category"(category_id) NOT VALID;
 N   ALTER TABLE ONLY public."Activity-Category" DROP CONSTRAINT category_id_fkey;
       public          postgres    false    228    3224    217            �           2606    35747 ,   Organisation-Activity organisation_name_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Organisation-Activity"
    ADD CONSTRAINT organisation_name_fkey FOREIGN KEY (organisation_name) REFERENCES public."Organisation"(organization_name) NOT VALID;
 X   ALTER TABLE ONLY public."Organisation-Activity" DROP CONSTRAINT organisation_name_fkey;
       public          postgres    false    226    219    3230            �           2606    35754 *   Person-Organisation organisation_name_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Person-Organisation"
    ADD CONSTRAINT organisation_name_fkey FOREIGN KEY (organisation_name) REFERENCES public."Organisation"(organization_name) NOT VALID;
 V   ALTER TABLE ONLY public."Person-Organisation" DROP CONSTRAINT organisation_name_fkey;
       public          postgres    false    3230    219    224            �           2606    35759    Organisation owner_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Organisation"
    ADD CONSTRAINT owner_id_fkey FOREIGN KEY (owner_id) REFERENCES public."Person"(person_id) NOT VALID;
 F   ALTER TABLE ONLY public."Organisation" DROP CONSTRAINT owner_id_fkey;
       public          postgres    false    214    219    3218            �           2606    35691    Person-Activity person_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Person-Activity"
    ADD CONSTRAINT person_id_fkey FOREIGN KEY (person_id) REFERENCES public."Person"(person_id) NOT VALID;
 J   ALTER TABLE ONLY public."Person-Activity" DROP CONSTRAINT person_id_fkey;
       public          postgres    false    225    214    3218            �           2606    35701    Person-Category person_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Person-Category"
    ADD CONSTRAINT person_id_fkey FOREIGN KEY (person_id) REFERENCES public."Person"(person_id) NOT VALID;
 J   ALTER TABLE ONLY public."Person-Category" DROP CONSTRAINT person_id_fkey;
       public          postgres    false    3218    227    214            �           2606    35711 "   Person-Organisation person_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Person-Organisation"
    ADD CONSTRAINT person_id_fkey FOREIGN KEY (person_id) REFERENCES public."Person"(person_id) NOT VALID;
 N   ALTER TABLE ONLY public."Person-Organisation" DROP CONSTRAINT person_id_fkey;
       public          postgres    false    3218    224    214            E   [   x�3�tL.�,�,�T(I-.��HM,K���!S.cTi#tyTyctySTyty3Ty3tysTystyTytyCT�
�|hh��"F��� �X      L   (   x�sL.�,�,�T(I-.14�44�rD2�������� �=�      A   m   x��K�@ �5��'0��0n��)�&������2��!t�Q�q�	�V_�
��MyL)�j�D� �.<�^��vo���%��oH�59Kb
*/|�B�(p      C      x������ � �      J      x������ � �      M   z   x�M�K
�0еt��������]�m�&���{��tZixHh �`
y�#e5	%]��ɲ����y��W5͟��Y��X'�#t����l���&��fxj�K�Q�k��#6��{�U�9	EI      >   �   x����n�0D�㏁���8��l�
[�b���I$�M%�X�y+����0�\���Gi�mc�] +|���-.�ôK�r�ֵMN��Ib�պv��ٺ9��=Jh���1N�l��:�%������%�T�:W���d�ޱU�n��Ш�n������Q�|�e�z5�/����H_��=��>��>�=76Y�86ֳU�RJ= ��_      I   -   x�3��/�K-�tL.�,�,�T(I-.14�2��M�M�"���� �
      K      x�3�44����� ]V      H      x������ � �      G      x������ � �     